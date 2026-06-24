/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OsSecretBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * Maximum number of versions to keep for secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend#max_versions OsSecretBackend#max_versions}
  */
  readonly maxVersions?: number;
  /**
  * Path where the OS secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend#mount OsSecretBackend#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend#namespace OsSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Trust SSH host keys on first use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend#ssh_host_key_trust_on_first_use OsSecretBackend#ssh_host_key_trust_on_first_use}
  */
  readonly sshHostKeyTrustOnFirstUse?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend vault_os_secret_backend}
*/
export class OsSecretBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_os_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OsSecretBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsSecretBackend to import
  * @param importFromId The id of the existing OsSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_os_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend vault_os_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: OsSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_os_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
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
    this._maxVersions = config.maxVersions;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._sshHostKeyTrustOnFirstUse = config.sshHostKeyTrustOnFirstUse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_versions - computed: true, optional: true, required: false
  private _maxVersions?: number; 
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }
  public set maxVersions(value: number) {
    this._maxVersions = value;
  }
  public resetMaxVersions() {
    this._maxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionsInput() {
    return this._maxVersions;
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

  // ssh_host_key_trust_on_first_use - computed: true, optional: true, required: false
  private _sshHostKeyTrustOnFirstUse?: boolean | cdktn.IResolvable; 
  public get sshHostKeyTrustOnFirstUse() {
    return this.getBooleanAttribute('ssh_host_key_trust_on_first_use');
  }
  public set sshHostKeyTrustOnFirstUse(value: boolean | cdktn.IResolvable) {
    this._sshHostKeyTrustOnFirstUse = value;
  }
  public resetSshHostKeyTrustOnFirstUse() {
    this._sshHostKeyTrustOnFirstUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyTrustOnFirstUseInput() {
    return this._sshHostKeyTrustOnFirstUse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_versions: cdktn.numberToTerraform(this._maxVersions),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      ssh_host_key_trust_on_first_use: cdktn.booleanToTerraform(this._sshHostKeyTrustOnFirstUse),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_versions: {
        value: cdktn.numberToHclTerraform(this._maxVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ssh_host_key_trust_on_first_use: {
        value: cdktn.booleanToHclTerraform(this._sshHostKeyTrustOnFirstUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
