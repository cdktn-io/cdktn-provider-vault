/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KerberosAuthBackendGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Path where the Kerberos auth method is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#mount KerberosAuthBackendGroup#mount}
  */
  readonly mount: string;
  /**
  * The name of the LDAP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#name KerberosAuthBackendGroup#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#namespace KerberosAuthBackendGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Set of Vault policies to associate with this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#policies KerberosAuthBackendGroup#policies}
  */
  readonly policies?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group vault_kerberos_auth_backend_group}
*/
export class KerberosAuthBackendGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kerberos_auth_backend_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KerberosAuthBackendGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KerberosAuthBackendGroup to import
  * @param importFromId The id of the existing KerberosAuthBackendGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KerberosAuthBackendGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kerberos_auth_backend_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group vault_kerberos_auth_backend_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KerberosAuthBackendGroupConfig
  */
  public constructor(scope: Construct, id: string, config: KerberosAuthBackendGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kerberos_auth_backend_group',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._policies = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktn.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._policies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
