# `transformTransformationFpeImportedKey` Submodule <a name="`transformTransformationFpeImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationFpeImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationFpeImportedKey <a name="TransformTransformationFpeImportedKey" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key vault_transform_transformation_fpe_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

transformtransformationfpeimportedkey.NewTransformTransformationFpeImportedKey(scope Construct, id *string, config TransformTransformationFpeImportedKeyConfig) TransformTransformationFpeImportedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig">TransformTransformationFpeImportedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig">TransformTransformationFpeImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetMaxTweakLen">ResetMaxTweakLen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetTweakSource">ResetTweakSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWo"></a>

```go
func ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWoVersion"></a>

```go
func ResetCiphertextWoVersion()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetHashFunction"></a>

```go
func ResetHashFunction()
```

##### `ResetMaxTweakLen` <a name="ResetMaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetMaxTweakLen"></a>

```go
func ResetMaxTweakLen()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTweakSource` <a name="ResetTweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetTweakSource"></a>

```go
func ResetTweakSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationFpeImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

transformtransformationfpeimportedkey.TransformTransformationFpeImportedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

transformtransformationfpeimportedkey.TransformTransformationFpeImportedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

transformtransformationfpeimportedkey.TransformTransformationFpeImportedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

transformtransformationfpeimportedkey.TransformTransformationFpeImportedKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransformTransformationFpeImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformTransformationFpeImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformTransformationFpeImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationFpeImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fpeAlgorithm">FpeAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLenInput">MaxTweakLenInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSourceInput">TweakSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunction">HashFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLen">MaxTweakLen</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSource">TweakSource</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FpeAlgorithm`<sup>Required</sup> <a name="FpeAlgorithm" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fpeAlgorithm"></a>

```go
func FpeAlgorithm() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoInput"></a>

```go
func CiphertextWoInput() *string
```

- *Type:* *string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersionInput"></a>

```go
func CiphertextWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunctionInput"></a>

```go
func HashFunctionInput() *string
```

- *Type:* *string

---

##### `MaxTweakLenInput`<sup>Optional</sup> <a name="MaxTweakLenInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLenInput"></a>

```go
func MaxTweakLenInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `TweakSourceInput`<sup>Optional</sup> <a name="TweakSourceInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSourceInput"></a>

```go
func TweakSourceInput() *string
```

- *Type:* *string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func CiphertextWo() *string
```

- *Type:* *string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersion"></a>

```go
func CiphertextWoVersion() *f64
```

- *Type:* *f64

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunction"></a>

```go
func HashFunction() *string
```

- *Type:* *string

---

##### `MaxTweakLen`<sup>Required</sup> <a name="MaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLen"></a>

```go
func MaxTweakLen() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `TweakSource`<sup>Required</sup> <a name="TweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSource"></a>

```go
func TweakSource() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationFpeImportedKeyConfig <a name="TransformTransformationFpeImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/transformtransformationfpeimportedkey"

&transformtransformationfpeimportedkey.TransformTransformationFpeImportedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	Template: *string,
	AllowedRoles: *[]*string,
	CiphertextWo: *string,
	CiphertextWoVersion: *f64,
	DeletionAllowed: interface{},
	HashFunction: *string,
	MaxTweakLen: *f64,
	Namespace: *string,
	TweakSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.template">Template</a></code> | <code>*string</code> | The name of the template to use. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>*string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>*f64</code> | Version identifier for `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>*string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.maxTweakLen">MaxTweakLen</a></code> | <code>*f64</code> | The maximum tweak length in bytes (0-32). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.tweakSource">TweakSource</a></code> | <code>*string</code> | The source of the tweak value (`supplied`, `generated` or `internal`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#mount TransformTransformationFpeImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#name TransformTransformationFpeImportedKey#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.template"></a>

```go
Template *string
```

- *Type:* *string

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#template TransformTransformationFpeImportedKey#template}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#allowed_roles TransformTransformationFpeImportedKey#allowed_roles}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWo"></a>

```go
CiphertextWo *string
```

- *Type:* *string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo TransformTransformationFpeImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWoVersion"></a>

```go
CiphertextWoVersion *f64
```

- *Type:* *f64

Version identifier for `ciphertext_wo`.

Vault imports ciphertext on create; changing this value replaces the transformation. Removing it does not replace the resource. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo_version TransformTransformationFpeImportedKey#ciphertext_wo_version}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#deletion_allowed TransformTransformationFpeImportedKey#deletion_allowed}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.hashFunction"></a>

```go
HashFunction *string
```

- *Type:* *string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#hash_function TransformTransformationFpeImportedKey#hash_function}

---

##### `MaxTweakLen`<sup>Optional</sup> <a name="MaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.maxTweakLen"></a>

```go
MaxTweakLen *f64
```

- *Type:* *f64

The maximum tweak length in bytes (0-32).

If the value is 0, the tweak length can be any value from 0 to 32 bytes. Vault does not allow this field to be changed after creation, so changing it returns an error from Vault. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#max_tweak_len TransformTransformationFpeImportedKey#max_tweak_len}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#namespace TransformTransformationFpeImportedKey#namespace}

---

##### `TweakSource`<sup>Optional</sup> <a name="TweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.tweakSource"></a>

```go
TweakSource *string
```

- *Type:* *string

The source of the tweak value (`supplied`, `generated` or `internal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#tweak_source TransformTransformationFpeImportedKey#tweak_source}

---



