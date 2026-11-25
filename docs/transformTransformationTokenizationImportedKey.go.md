# `transformTransformationTokenizationImportedKey` Submodule <a name="`transformTransformationTokenizationImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationImportedKey <a name="TransformTransformationTokenizationImportedKey" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

transformtransformationtokenizationimportedkey.NewTransformTransformationTokenizationImportedKey(scope Construct, id *string, config TransformTransformationTokenizationImportedKeyConfig) TransformTransformationTokenizationImportedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation">ResetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode">ResetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores">ResetStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAllowRotation` <a name="ResetAllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation"></a>

```go
func ResetAllowRotation()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod"></a>

```go
func ResetAutoRotatePeriod()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo"></a>

```go
func ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion"></a>

```go
func ResetCiphertextWoVersion()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction"></a>

```go
func ResetHashFunction()
```

##### `ResetMappingMode` <a name="ResetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode"></a>

```go
func ResetMappingMode()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion"></a>

```go
func ResetMinDecryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetStores` <a name="ResetStores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores"></a>

```go
func ResetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

transformtransformationtokenizationimportedkey.TransformTransformationTokenizationImportedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

transformtransformationtokenizationimportedkey.TransformTransformationTokenizationImportedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

transformtransformationtokenizationimportedkey.TransformTransformationTokenizationImportedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

transformtransformationtokenizationimportedkey.TransformTransformationTokenizationImportedKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformTransformationTokenizationImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput">AllowRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput">MappingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput">StoresInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation">AllowRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction">HashFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode">MappingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores">Stores</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion"></a>

```go
func MinAvailableVersion() *f64
```

- *Type:* *f64

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowRotationInput`<sup>Optional</sup> <a name="AllowRotationInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput"></a>

```go
func AllowRotationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput"></a>

```go
func AutoRotatePeriodInput() *f64
```

- *Type:* *f64

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput"></a>

```go
func CiphertextWoInput() *string
```

- *Type:* *string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput"></a>

```go
func CiphertextWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput"></a>

```go
func HashFunctionInput() *string
```

- *Type:* *string

---

##### `MappingModeInput`<sup>Optional</sup> <a name="MappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput"></a>

```go
func MappingModeInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput"></a>

```go
func MinDecryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `StoresInput`<sup>Optional</sup> <a name="StoresInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput"></a>

```go
func StoresInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AllowRotation`<sup>Required</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation"></a>

```go
func AllowRotation() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod"></a>

```go
func AutoRotatePeriod() *f64
```

- *Type:* *f64

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func CiphertextWo() *string
```

- *Type:* *string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion"></a>

```go
func CiphertextWoVersion() *f64
```

- *Type:* *f64

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction"></a>

```go
func HashFunction() *string
```

- *Type:* *string

---

##### `MappingMode`<sup>Required</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode"></a>

```go
func MappingMode() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion"></a>

```go
func MinDecryptionVersion() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Stores`<sup>Required</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores"></a>

```go
func Stores() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationImportedKeyConfig <a name="TransformTransformationTokenizationImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationtokenizationimportedkey"

&transformtransformationtokenizationimportedkey.TransformTransformationTokenizationImportedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	AllowedRoles: *[]*string,
	AllowRotation: interface{},
	AutoRotatePeriod: *f64,
	CiphertextWo: *string,
	CiphertextWoVersion: *f64,
	DeletionAllowed: interface{},
	HashFunction: *string,
	MappingMode: *string,
	MaxTtl: *f64,
	MinDecryptionVersion: *f64,
	Namespace: *string,
	Stores: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation">AllowRotation</a></code> | <code>interface{}</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>*string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode">MappingMode</a></code> | <code>*string</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores">Stores</a></code> | <code>*[]*string</code> | The stores that contain tokenized state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `AllowRotation`<sup>Optional</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation"></a>

```go
AllowRotation interface{}
```

- *Type:* interface{}

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod"></a>

```go
AutoRotatePeriod *f64
```

- *Type:* *f64

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo"></a>

```go
CiphertextWo *string
```

- *Type:* *string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion"></a>

```go
CiphertextWoVersion *f64
```

- *Type:* *f64

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction"></a>

```go
HashFunction *string
```

- *Type:* *string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `MappingMode`<sup>Optional</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode"></a>

```go
MappingMode *string
```

- *Type:* *string

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion"></a>

```go
MinDecryptionVersion *f64
```

- *Type:* *f64

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `Stores`<sup>Optional</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores"></a>

```go
Stores *[]*string
```

- *Type:* *[]*string

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---



