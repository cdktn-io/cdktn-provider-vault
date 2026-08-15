# `gcpkmsSecretBackend` Submodule <a name="`gcpkmsSecretBackend` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackend <a name="GcpkmsSecretBackend" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend vault_gcpkms_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

gcpkmssecretbackend.NewGcpkmsSecretBackend(scope Construct, id *string, config GcpkmsSecretBackendConfig) GcpkmsSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig">GcpkmsSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig">GcpkmsSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo">ResetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys"></a>

```go
func ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetCredentialsWo` <a name="ResetCredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo"></a>

```go
func ResetCredentialsWo()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors"></a>

```go
func ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess"></a>

```go
func ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache"></a>

```go
func ResetForceNoCache()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey"></a>

```go
func ResetIdentityTokenKey()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion"></a>

```go
func ResetPluginVersion()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap"></a>

```go
func ResetSealWrap()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

gcpkmssecretbackend.GcpkmsSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

gcpkmssecretbackend.GcpkmsSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

gcpkmssecretbackend.GcpkmsSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

gcpkmssecretbackend.GcpkmsSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GcpkmsSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GcpkmsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput">CredentialsWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput">CredentialsWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo">CredentialsWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput"></a>

```go
func AllowedManagedKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `CredentialsWoInput`<sup>Optional</sup> <a name="CredentialsWoInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput"></a>

```go
func CredentialsWoInput() *string
```

- *Type:* *string

---

##### `CredentialsWoVersionInput`<sup>Optional</sup> <a name="CredentialsWoVersionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput"></a>

```go
func CredentialsWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput"></a>

```go
func DelegatedAuthAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput"></a>

```go
func ExternalEntropyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput"></a>

```go
func ForceNoCacheInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput"></a>

```go
func IdentityTokenKeyInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput"></a>

```go
func PluginVersionInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput"></a>

```go
func SealWrapInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys"></a>

```go
func AllowedManagedKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### ~~`CredentialsWo`~~<sup>Required</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func CredentialsWo() *string
```

- *Type:* *string

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion"></a>

```go
func CredentialsWoVersion() *f64
```

- *Type:* *f64

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors"></a>

```go
func DelegatedAuthAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess"></a>

```go
func ExternalEntropyAccess() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache"></a>

```go
func ForceNoCache() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey"></a>

```go
func IdentityTokenKey() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion"></a>

```go
func PluginVersion() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap"></a>

```go
func SealWrap() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendConfig <a name="GcpkmsSecretBackendConfig" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackend"

&gcpkmssecretbackend.GcpkmsSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialsWoVersion: *f64,
	Path: *string,
	AllowedManagedKeys: *[]*string,
	AllowedResponseHeaders: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	CredentialsWo: *string,
	DefaultLeaseTtlSeconds: *f64,
	DelegatedAuthAccessors: *[]*string,
	Description: *string,
	ExternalEntropyAccess: interface{},
	ForceNoCache: interface{},
	IdentityTokenKey: *string,
	ListingVisibility: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Options: *map[string]*string,
	PassthroughRequestHeaders: *[]*string,
	PluginVersion: *string,
	Scopes: *[]*string,
	SealWrap: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>*f64</code> | Version number for the write-only credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the plugin to the request. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo">CredentialsWo</a></code> | <code>*string</code> | JSON-encoded GCP service account credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | List of auth accessor IDs that can delegate authentication to this mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms']. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion"></a>

```go
CredentialsWoVersion *f64
```

- *Type:* *f64

Version number for the write-only credentials.

Increment this value to trigger a credential rotation. Changing this value will cause the credentials to be re-sent to Vault during the next apply. Set `credentials_wo = ""` to rotate to Default Application Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo_version GcpkmsSecretBackend#credentials_wo_version}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#path GcpkmsSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys"></a>

```go
AllowedManagedKeys *[]*string
```

- *Type:* *[]*string

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_managed_keys GcpkmsSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the plugin to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_response_headers GcpkmsSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_request_keys GcpkmsSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_response_keys GcpkmsSecretBackend#audit_non_hmac_response_keys}

---

##### `CredentialsWo`<sup>Optional</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo"></a>

```go
CredentialsWo *string
```

- *Type:* *string

JSON-encoded GCP service account credentials.

Write-only — never stored in Terraform state. Leave this blank (`""`) to use Default Application Credentials or instance metadata authentication. Requires Terraform 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo GcpkmsSecretBackend#credentials_wo}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#default_lease_ttl_seconds GcpkmsSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors"></a>

```go
DelegatedAuthAccessors *[]*string
```

- *Type:* *[]*string

List of auth accessor IDs that can delegate authentication to this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#delegated_auth_accessors GcpkmsSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#description GcpkmsSecretBackend#description}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess"></a>

```go
ExternalEntropyAccess interface{}
```

- *Type:* interface{}

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#external_entropy_access GcpkmsSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache"></a>

```go
ForceNoCache interface{}
```

- *Type:* interface{}

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#force_no_cache GcpkmsSecretBackend#force_no_cache}

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey"></a>

```go
IdentityTokenKey *string
```

- *Type:* *string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#identity_token_key GcpkmsSecretBackend#identity_token_key}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#listing_visibility GcpkmsSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#local GcpkmsSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#max_lease_ttl_seconds GcpkmsSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#namespace GcpkmsSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#options GcpkmsSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#passthrough_request_headers GcpkmsSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion"></a>

```go
PluginVersion *string
```

- *Type:* *string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#plugin_version GcpkmsSecretBackend#plugin_version}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#scopes GcpkmsSecretBackend#scopes}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap"></a>

```go
SealWrap interface{}
```

- *Type:* interface{}

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#seal_wrap GcpkmsSecretBackend#seal_wrap}

---



