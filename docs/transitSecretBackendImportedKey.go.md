# `transitSecretBackendImportedKey` Submodule <a name="`transitSecretBackendImportedKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendImportedKey <a name="TransitSecretBackendImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

transitsecretbackendimportedkey.NewTransitSecretBackendImportedKey(scope Construct, id *string, config TransitSecretBackendImportedKeyConfig) TransitSecretBackendImportedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup">ResetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation">ResetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived">ResetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable">ResetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType">ResetImportVersionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion">ResetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowPlaintextBackup` <a name="ResetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup"></a>

```go
func ResetAllowPlaintextBackup()
```

##### `ResetAllowRotation` <a name="ResetAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation"></a>

```go
func ResetAllowRotation()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod"></a>

```go
func ResetAutoRotatePeriod()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo"></a>

```go
func ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion"></a>

```go
func ResetCiphertextWoVersion()
```

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext"></a>

```go
func ResetContext()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetDerived` <a name="ResetDerived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived"></a>

```go
func ResetDerived()
```

##### `ResetExportable` <a name="ResetExportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable"></a>

```go
func ResetExportable()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction"></a>

```go
func ResetHashFunction()
```

##### `ResetImportVersionType` <a name="ResetImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType"></a>

```go
func ResetImportVersionType()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion"></a>

```go
func ResetMinDecryptionVersion()
```

##### `ResetMinEncryptionVersion` <a name="ResetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion"></a>

```go
func ResetMinEncryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

transitsecretbackendimportedkey.TransitSecretBackendImportedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

transitsecretbackendimportedkey.TransitSecretBackendImportedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

transitsecretbackendimportedkey.TransitSecretBackendImportedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

transitsecretbackendimportedkey.TransitSecretBackendImportedKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransitSecretBackendImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransitSecretBackendImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey">ImportedKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation">ImportedKeyAllowRotation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys">Keys</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType">LatestVersionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption">SupportsDecryption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation">SupportsDerivation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption">SupportsEncryption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning">SupportsSigning</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput">AllowPlaintextBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput">AllowRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput">DerivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput">ExportableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput">ImportVersionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput">MinEncryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation">AllowRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived">Derived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable">Exportable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction">HashFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType">ImportVersionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImportedKey`<sup>Required</sup> <a name="ImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey"></a>

```go
func ImportedKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ImportedKeyAllowRotation`<sup>Required</sup> <a name="ImportedKeyAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation"></a>

```go
func ImportedKeyAllowRotation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys"></a>

```go
func Keys() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `LatestVersionType`<sup>Required</sup> <a name="LatestVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType"></a>

```go
func LatestVersionType() *string
```

- *Type:* *string

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion"></a>

```go
func MinAvailableVersion() *f64
```

- *Type:* *f64

---

##### `SupportsDecryption`<sup>Required</sup> <a name="SupportsDecryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption"></a>

```go
func SupportsDecryption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsDerivation`<sup>Required</sup> <a name="SupportsDerivation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation"></a>

```go
func SupportsDerivation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsEncryption`<sup>Required</sup> <a name="SupportsEncryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption"></a>

```go
func SupportsEncryption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsSigning`<sup>Required</sup> <a name="SupportsSigning" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning"></a>

```go
func SupportsSigning() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AllowPlaintextBackupInput`<sup>Optional</sup> <a name="AllowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput"></a>

```go
func AllowPlaintextBackupInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRotationInput`<sup>Optional</sup> <a name="AllowRotationInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput"></a>

```go
func AllowRotationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput"></a>

```go
func AutoRotatePeriodInput() *f64
```

- *Type:* *f64

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput"></a>

```go
func CiphertextWoInput() *string
```

- *Type:* *string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput"></a>

```go
func CiphertextWoVersionInput() *f64
```

- *Type:* *f64

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `DerivedInput`<sup>Optional</sup> <a name="DerivedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput"></a>

```go
func DerivedInput() interface{}
```

- *Type:* interface{}

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput"></a>

```go
func ExportableInput() interface{}
```

- *Type:* interface{}

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput"></a>

```go
func HashFunctionInput() *string
```

- *Type:* *string

---

##### `ImportVersionTypeInput`<sup>Optional</sup> <a name="ImportVersionTypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput"></a>

```go
func ImportVersionTypeInput() *string
```

- *Type:* *string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput"></a>

```go
func MinDecryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `MinEncryptionVersionInput`<sup>Optional</sup> <a name="MinEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput"></a>

```go
func MinEncryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `AllowPlaintextBackup`<sup>Required</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup"></a>

```go
func AllowPlaintextBackup() interface{}
```

- *Type:* interface{}

---

##### `AllowRotation`<sup>Required</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation"></a>

```go
func AllowRotation() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod"></a>

```go
func AutoRotatePeriod() *f64
```

- *Type:* *f64

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func CiphertextWo() *string
```

- *Type:* *string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion"></a>

```go
func CiphertextWoVersion() *f64
```

- *Type:* *f64

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `Derived`<sup>Required</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived"></a>

```go
func Derived() interface{}
```

- *Type:* interface{}

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable"></a>

```go
func Exportable() interface{}
```

- *Type:* interface{}

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction"></a>

```go
func HashFunction() *string
```

- *Type:* *string

---

##### `ImportVersionType`<sup>Required</sup> <a name="ImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType"></a>

```go
func ImportVersionType() *string
```

- *Type:* *string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion"></a>

```go
func MinDecryptionVersion() *f64
```

- *Type:* *f64

---

##### `MinEncryptionVersion`<sup>Required</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion"></a>

```go
func MinEncryptionVersion() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendImportedKeyConfig <a name="TransitSecretBackendImportedKeyConfig" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transitsecretbackendimportedkey"

&transitsecretbackendimportedkey.TransitSecretBackendImportedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	Type: *string,
	AllowPlaintextBackup: interface{},
	AllowRotation: interface{},
	AutoRotatePeriod: *f64,
	CiphertextWo: *string,
	CiphertextWoVersion: *f64,
	Context: *string,
	DeletionAllowed: interface{},
	Derived: interface{},
	Exportable: interface{},
	HashFunction: *string,
	ImportVersionType: *string,
	MinDecryptionVersion: *f64,
	MinEncryptionVersion: *f64,
	Namespace: *string,
	PublicKey: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>interface{}</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation">AllowRotation</a></code> | <code>interface{}</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context">Context</a></code> | <code>*string</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived">Derived</a></code> | <code>interface{}</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable">Exportable</a></code> | <code>interface{}</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>*string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType">ImportVersionType</a></code> | <code>*string</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>*f64</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version">Version</a></code> | <code>*f64</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `AllowPlaintextBackup`<sup>Optional</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup"></a>

```go
AllowPlaintextBackup interface{}
```

- *Type:* interface{}

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `AllowRotation`<sup>Optional</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation"></a>

```go
AllowRotation interface{}
```

- *Type:* interface{}

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod"></a>

```go
AutoRotatePeriod *f64
```

- *Type:* *f64

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo"></a>

```go
CiphertextWo *string
```

- *Type:* *string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion"></a>

```go
CiphertextWoVersion *f64
```

- *Type:* *f64

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `Derived`<sup>Optional</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived"></a>

```go
Derived interface{}
```

- *Type:* interface{}

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `Exportable`<sup>Optional</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable"></a>

```go
Exportable interface{}
```

- *Type:* interface{}

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction"></a>

```go
HashFunction *string
```

- *Type:* *string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `ImportVersionType`<sup>Optional</sup> <a name="ImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType"></a>

```go
ImportVersionType *string
```

- *Type:* *string

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion"></a>

```go
MinDecryptionVersion *f64
```

- *Type:* *f64

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `MinEncryptionVersion`<sup>Optional</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion"></a>

```go
MinEncryptionVersion *f64
```

- *Type:* *f64

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---



