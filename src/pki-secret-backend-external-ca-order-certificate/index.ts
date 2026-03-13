/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendExternalCaOrderCertificateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#mount PkiSecretBackendExternalCaOrderCertificate#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#namespace PkiSecretBackendExternalCaOrderCertificate#namespace}
  */
  readonly namespace?: string;
  /**
  * The unique identifier for the ACME order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#order_id PkiSecretBackendExternalCaOrderCertificate#order_id}
  */
  readonly orderId: string;
  /**
  * Name of the role associated with the order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#role_name PkiSecretBackendExternalCaOrderCertificate#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate vault_pki_secret_backend_external_ca_order_certificate}
*/
export class PkiSecretBackendExternalCaOrderCertificate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_external_ca_order_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendExternalCaOrderCertificate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendExternalCaOrderCertificate to import
  * @param importFromId The id of the existing PkiSecretBackendExternalCaOrderCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendExternalCaOrderCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_external_ca_order_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate vault_pki_secret_backend_external_ca_order_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendExternalCaOrderCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendExternalCaOrderCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_external_ca_order_certificate',
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
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._orderId = config.orderId;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_chain - computed: true, optional: false, required: false
  public get caChain() {
    return this.getListAttribute('ca_chain');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
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

  // order_id - computed: false, optional: false, required: true
  private _orderId?: string; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string) {
    this._orderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
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
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      order_id: cdktn.stringToTerraform(this._orderId),
      role_name: cdktn.stringToTerraform(this._roleName),
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
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_id: {
        value: cdktn.stringToHclTerraform(this._orderId),
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
