# `pkiExternalCaSecretBackendDnsProviderGcp` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderGcp` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderGcp <a name="PkiExternalCaSecretBackendDnsProviderGcp" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

pkiexternalcasecretbackenddnsprovidergcp.NewPkiExternalCaSecretBackendDnsProviderGcp(scope Construct, id *string, config PkiExternalCaSecretBackendDnsProviderGcpConfig) PkiExternalCaSecretBackendDnsProviderGcp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo">ResetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion">ResetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver">ResetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialsWo` <a name="ResetCredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo"></a>

```go
func ResetCredentialsWo()
```

##### `ResetCredentialsWoVersion` <a name="ResetCredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion"></a>

```go
func ResetCredentialsWoVersion()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount"></a>

```go
func ResetImpersonateServiceAccount()
```

##### `ResetNameserver` <a name="ResetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver"></a>

```go
func ResetNameserver()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName"></a>

```go
func ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

pkiexternalcasecretbackenddnsprovidergcp.PkiExternalCaSecretBackendDnsProviderGcp_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

pkiexternalcasecretbackenddnsprovidergcp.PkiExternalCaSecretBackendDnsProviderGcp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

pkiexternalcasecretbackenddnsprovidergcp.PkiExternalCaSecretBackendDnsProviderGcp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

pkiexternalcasecretbackenddnsprovidergcp.PkiExternalCaSecretBackendDnsProviderGcp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiExternalCaSecretBackendDnsProviderGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput">CredentialsWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput">CredentialsWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput">IdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput">NameserverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo">CredentialsWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver">Nameserver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `CredentialsWoInput`<sup>Optional</sup> <a name="CredentialsWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput"></a>

```go
func CredentialsWoInput() *string
```

- *Type:* *string

---

##### `CredentialsWoVersionInput`<sup>Optional</sup> <a name="CredentialsWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput"></a>

```go
func CredentialsWoVersionInput() *f64
```

- *Type:* *f64

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput"></a>

```go
func IdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput"></a>

```go
func ImpersonateServiceAccountInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput"></a>

```go
func NameserverInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### ~~`CredentialsWo`~~<sup>Required</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func CredentialsWo() *string
```

- *Type:* *string

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion"></a>

```go
func CredentialsWoVersion() *f64
```

- *Type:* *f64

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers"></a>

```go
func Identifiers() *[]*string
```

- *Type:* *[]*string

---

##### `ImpersonateServiceAccount`<sup>Required</sup> <a name="ImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount"></a>

```go
func ImpersonateServiceAccount() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver"></a>

```go
func Nameserver() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderGcpConfig <a name="PkiExternalCaSecretBackendDnsProviderGcpConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsprovidergcp"

&pkiexternalcasecretbackenddnsprovidergcp.PkiExternalCaSecretBackendDnsProviderGcpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Identifiers: *[]*string,
	Mount: *string,
	Name: *string,
	CredentialsWo: *string,
	CredentialsWoVersion: *f64,
	ImpersonateServiceAccount: *string,
	Nameserver: *string,
	Namespace: *string,
	Project: *string,
	Ttl: *f64,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name">Name</a></code> | <code>*string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo">CredentialsWo</a></code> | <code>*string</code> | GCP service account credentials as JSON content. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>*f64</code> | Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | Service account email to impersonate. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver">Nameserver</a></code> | <code>*string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project">Project</a></code> | <code>*string</code> | GCP project name. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | GCP Cloud DNS zone name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers"></a>

```go
Identifiers *[]*string
```

- *Type:* *[]*string

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}

---

##### `CredentialsWo`<sup>Optional</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo"></a>

```go
CredentialsWo *string
```

- *Type:* *string

GCP service account credentials as JSON content. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}

---

##### `CredentialsWoVersion`<sup>Optional</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion"></a>

```go
CredentialsWoVersion *f64
```

- *Type:* *f64

Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount"></a>

```go
ImpersonateServiceAccount *string
```

- *Type:* *string

Service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}

---

##### `Nameserver`<sup>Optional</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver"></a>

```go
Nameserver *string
```

- *Type:* *string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

GCP project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

GCP Cloud DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}

---



