/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendExternalCaOrderChallengeFulfilledConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of ACME challenge that was fulfilled. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#challenge_type PkiSecretBackendExternalCaOrderChallengeFulfilled#challenge_type}
  */
  readonly challengeType: string;
  /**
  * The identifier (domain name) for which the challenge was fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#identifier PkiSecretBackendExternalCaOrderChallengeFulfilled#identifier}
  */
  readonly identifier: string;
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#mount PkiSecretBackendExternalCaOrderChallengeFulfilled#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#namespace PkiSecretBackendExternalCaOrderChallengeFulfilled#namespace}
  */
  readonly namespace?: string;
  /**
  * The unique identifier for the ACME order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#order_id PkiSecretBackendExternalCaOrderChallengeFulfilled#order_id}
  */
  readonly orderId: string;
  /**
  * Name of the role associated with the order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#role_name PkiSecretBackendExternalCaOrderChallengeFulfilled#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled vault_pki_secret_backend_external_ca_order_challenge_fulfilled}
*/
export class PkiSecretBackendExternalCaOrderChallengeFulfilled extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_external_ca_order_challenge_fulfilled";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendExternalCaOrderChallengeFulfilled resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendExternalCaOrderChallengeFulfilled to import
  * @param importFromId The id of the existing PkiSecretBackendExternalCaOrderChallengeFulfilled that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendExternalCaOrderChallengeFulfilled to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_external_ca_order_challenge_fulfilled", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_challenge_fulfilled vault_pki_secret_backend_external_ca_order_challenge_fulfilled} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendExternalCaOrderChallengeFulfilledConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendExternalCaOrderChallengeFulfilledConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_external_ca_order_challenge_fulfilled',
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
    this._challengeType = config.challengeType;
    this._identifier = config.identifier;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._orderId = config.orderId;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challenge_type - computed: false, optional: false, required: true
  private _challengeType?: string; 
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }
  public set challengeType(value: string) {
    this._challengeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTypeInput() {
    return this._challengeType;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      challenge_type: cdktn.stringToTerraform(this._challengeType),
      identifier: cdktn.stringToTerraform(this._identifier),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      order_id: cdktn.stringToTerraform(this._orderId),
      role_name: cdktn.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      challenge_type: {
        value: cdktn.stringToHclTerraform(this._challengeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktn.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
