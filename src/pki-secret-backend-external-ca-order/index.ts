/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendExternalCaOrderConfig extends cdktn.TerraformMetaArguments {
  /**
  * PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#csr PkiSecretBackendExternalCaOrder#csr}
  */
  readonly csr?: string;
  /**
  * List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#identifiers PkiSecretBackendExternalCaOrder#identifiers}
  */
  readonly identifiers?: string[];
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#mount PkiSecretBackendExternalCaOrder#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#namespace PkiSecretBackendExternalCaOrder#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the role to create the order for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#role_name PkiSecretBackendExternalCaOrder#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order vault_pki_secret_backend_external_ca_order}
*/
export class PkiSecretBackendExternalCaOrder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_external_ca_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendExternalCaOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendExternalCaOrder to import
  * @param importFromId The id of the existing PkiSecretBackendExternalCaOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendExternalCaOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_external_ca_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order vault_pki_secret_backend_external_ca_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendExternalCaOrderConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendExternalCaOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_external_ca_order',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.8.0',
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
    this._csr = config.csr;
    this._identifiers = config.identifiers;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challenges - computed: true, optional: false, required: false
  private _challenges = new cdktn.StringMap(this, "challenges");
  public get challenges() {
    return this._challenges;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // identifiers - computed: true, optional: true, required: false
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  public resetIdentifiers() {
    this._identifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

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

  // next_work_date - computed: true, optional: false, required: false
  public get nextWorkDate() {
    return this.getStringAttribute('next_work_date');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // order_status - computed: true, optional: false, required: false
  public get orderStatus() {
    return this.getStringAttribute('order_status');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktn.stringToTerraform(this._csr),
      identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identifiers),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      role_name: cdktn.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr: {
        value: cdktn.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      role_name: {
        value: cdktn.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
