# `oauthResourceServerConfigProfile` Submodule <a name="`oauthResourceServerConfigProfile` Submodule" id="@cdktn/provider-vault.oauthResourceServerConfigProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthResourceServerConfigProfile <a name="OauthResourceServerConfigProfile" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OauthResourceServerConfigProfile(Construct Scope, string Id, OauthResourceServerConfigProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys">PutPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem">ResetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType">ResetJwtType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails">ResetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys">ResetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms">ResetSupportedAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks">ResetUseJwks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim">ResetUserClaim</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicKeys` <a name="PutPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys"></a>

```csharp
private void PutPublicKeys(IResolvable|OauthResourceServerConfigProfilePublicKeys[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway"></a>

```csharp
private void ResetClockSkewLeeway()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJwksCaPem` <a name="ResetJwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem"></a>

```csharp
private void ResetJwksCaPem()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri"></a>

```csharp
private void ResetJwksUri()
```

##### `ResetJwtType` <a name="ResetJwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType"></a>

```csharp
private void ResetJwtType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy"></a>

```csharp
private void ResetNoDefaultPolicy()
```

##### `ResetOptionalAuthorizationDetails` <a name="ResetOptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails"></a>

```csharp
private void ResetOptionalAuthorizationDetails()
```

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys"></a>

```csharp
private void ResetPublicKeys()
```

##### `ResetSupportedAlgorithms` <a name="ResetSupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms"></a>

```csharp
private void ResetSupportedAlgorithms()
```

##### `ResetUseJwks` <a name="ResetUseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks"></a>

```csharp
private void ResetUseJwks()
```

##### `ResetUserClaim` <a name="ResetUserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim"></a>

```csharp
private void ResetUserClaim()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OauthResourceServerConfigProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OauthResourceServerConfigProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OauthResourceServerConfigProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OauthResourceServerConfigProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OauthResourceServerConfigProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OauthResourceServerConfigProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys">PublicKeys</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput">IssuerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput">JwksCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput">JwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput">JwtTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput">OptionalAuthorizationDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput">PublicKeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput">SupportedAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput">UseJwksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput">UserClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId">IssuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem">JwksCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType">JwtType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms">SupportedAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks">UseJwks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim">UserClaim</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys"></a>

```csharp
public OauthResourceServerConfigProfilePublicKeysList PublicKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a>

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput"></a>

```csharp
public double ClockSkewLeewayInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IssuerIdInput`<sup>Optional</sup> <a name="IssuerIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput"></a>

```csharp
public string IssuerIdInput { get; }
```

- *Type:* string

---

##### `JwksCaPemInput`<sup>Optional</sup> <a name="JwksCaPemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput"></a>

```csharp
public string JwksCaPemInput { get; }
```

- *Type:* string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput"></a>

```csharp
public string JwksUriInput { get; }
```

- *Type:* string

---

##### `JwtTypeInput`<sup>Optional</sup> <a name="JwtTypeInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput"></a>

```csharp
public string JwtTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput"></a>

```csharp
public bool|IResolvable NoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="OptionalAuthorizationDetailsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput"></a>

```csharp
public IResolvable|OauthResourceServerConfigProfilePublicKeys[] PublicKeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---

##### `SupportedAlgorithmsInput`<sup>Optional</sup> <a name="SupportedAlgorithmsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput"></a>

```csharp
public string[] SupportedAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `UseJwksInput`<sup>Optional</sup> <a name="UseJwksInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput"></a>

```csharp
public bool|IResolvable UseJwksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserClaimInput`<sup>Optional</sup> <a name="UserClaimInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput"></a>

```csharp
public string UserClaimInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId"></a>

```csharp
public string IssuerId { get; }
```

- *Type:* string

---

##### `JwksCaPem`<sup>Required</sup> <a name="JwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem"></a>

```csharp
public string JwksCaPem { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `JwtType`<sup>Required</sup> <a name="JwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType"></a>

```csharp
public string JwtType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy"></a>

```csharp
public bool|IResolvable NoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptionalAuthorizationDetails`<sup>Required</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SupportedAlgorithms`<sup>Required</sup> <a name="SupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms"></a>

```csharp
public string[] SupportedAlgorithms { get; }
```

- *Type:* string[]

---

##### `UseJwks`<sup>Required</sup> <a name="UseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks"></a>

```csharp
public bool|IResolvable UseJwks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim"></a>

```csharp
public string UserClaim { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthResourceServerConfigProfileConfig <a name="OauthResourceServerConfigProfileConfig" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OauthResourceServerConfigProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IssuerId,
    string ProfileName,
    string[] Audiences = null,
    double ClockSkewLeeway = null,
    bool|IResolvable Enabled = null,
    string JwksCaPem = null,
    string JwksUri = null,
    string JwtType = null,
    string Namespace = null,
    bool|IResolvable NoDefaultPolicy = null,
    bool|IResolvable OptionalAuthorizationDetails = null,
    IResolvable|OauthResourceServerConfigProfilePublicKeys[] PublicKeys = null,
    string[] SupportedAlgorithms = null,
    bool|IResolvable UseJwks = null,
    string UserClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId">IssuerId</a></code> | <code>string</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName">ProfileName</a></code> | <code>string</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences">Audiences</a></code> | <code>string[]</code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem">JwksCaPem</a></code> | <code>string</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri">JwksUri</a></code> | <code>string</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType">JwtType</a></code> | <code>string</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys">PublicKeys</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms">SupportedAlgorithms</a></code> | <code>string[]</code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks">UseJwks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim">UserClaim</a></code> | <code>string</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId"></a>

```csharp
public string IssuerId { get; set; }
```

- *Type:* string

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; set; }
```

- *Type:* double

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `JwksCaPem`<sup>Optional</sup> <a name="JwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem"></a>

```csharp
public string JwksCaPem { get; set; }
```

- *Type:* string

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri"></a>

```csharp
public string JwksUri { get; set; }
```

- *Type:* string

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `JwtType`<sup>Optional</sup> <a name="JwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType"></a>

```csharp
public string JwtType { get; set; }
```

- *Type:* string

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy"></a>

```csharp
public bool|IResolvable NoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `OptionalAuthorizationDetails`<sup>Optional</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys"></a>

```csharp
public IResolvable|OauthResourceServerConfigProfilePublicKeys[] PublicKeys { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `SupportedAlgorithms`<sup>Optional</sup> <a name="SupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms"></a>

```csharp
public string[] SupportedAlgorithms { get; set; }
```

- *Type:* string[]

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `UseJwks`<sup>Optional</sup> <a name="UseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks"></a>

```csharp
public bool|IResolvable UseJwks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `UserClaim`<sup>Optional</sup> <a name="UserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim"></a>

```csharp
public string UserClaim { get; set; }
```

- *Type:* string

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

### OauthResourceServerConfigProfilePublicKeys <a name="OauthResourceServerConfigProfilePublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OauthResourceServerConfigProfilePublicKeys {
    string KeyId,
    string Pem
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId">KeyId</a></code> | <code>string</code> | The key ID (kid) for this public key. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem">Pem</a></code> | <code>string</code> | The PEM-encoded public key. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The key ID (kid) for this public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem"></a>

```csharp
public string Pem { get; set; }
```

- *Type:* string

The PEM-encoded public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthResourceServerConfigProfilePublicKeysList <a name="OauthResourceServerConfigProfilePublicKeysList" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OauthResourceServerConfigProfilePublicKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get"></a>

```csharp
private OauthResourceServerConfigProfilePublicKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue"></a>

```csharp
public IResolvable|OauthResourceServerConfigProfilePublicKeys[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---


### OauthResourceServerConfigProfilePublicKeysOutputReference <a name="OauthResourceServerConfigProfilePublicKeysOutputReference" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OauthResourceServerConfigProfilePublicKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput">PemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem">Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `PemInput`<sup>Optional</sup> <a name="PemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput"></a>

```csharp
public string PemInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem"></a>

```csharp
public string Pem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OauthResourceServerConfigProfilePublicKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>

---



